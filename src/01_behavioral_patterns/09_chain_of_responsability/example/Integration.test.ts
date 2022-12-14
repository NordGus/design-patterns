import Authenticator from "./handlers/Authenticator";
import Compressor from "./handlers/Compressor";
import HttpRequest from "./HttpRequest";
import Logger from "./handlers/Logger";
import WebServer from "./WebServer";
import Encryptor from "./handlers/Encryptor";

describe("A simple web server pipeline", () => {
    afterEach(() => jest.clearAllMocks());
    
    describe("unencrypted chain", () => {        
        const compressor = new Compressor();
        const logger = new Logger(compressor);
        const authenticator = new Authenticator(logger);
        const server = new WebServer(authenticator);
    
        describe("authenticated user", () => {
            const request: HttpRequest = new HttpRequest("admin", "1234");
    
            beforeEach(() => {
                jest.spyOn(console, "log");
                server.handle(request);
            });
    
            it("should have called the entire pipeline", () => {
                expect(console.log).toHaveBeenCalledTimes(3);
            });
    
            it("should authenticate the user", () => {
                expect(console.log).toHaveBeenNthCalledWith(1, "Authenticated: true");
            });
    
            it("should log the request", () => {
                expect(console.log).toHaveBeenNthCalledWith(2, "Logged");
            });
    
            it("should compress the request", () => {
                expect(console.log).toHaveBeenNthCalledWith(3, "Compressed");
            });
        });
        
        describe("unauthenticated user", () => {
            const request: HttpRequest = new HttpRequest("jonhwick", "doggologger");
    
            beforeEach(() => {
                jest.spyOn(console, "log");
                server.handle(request);
            });
    
            it("should have called the pipeline until the authentication step", () => {
                expect(console.log).toHaveBeenCalledTimes(1);
            });
    
            it("should authenticate the user", () => {
                expect(console.log).toHaveBeenNthCalledWith(1, "Authenticated: false");
            });
        });
    });

    describe("encrypted chain without logging", () => {        
        const encryptor = new Encryptor();
        const compressor = new Compressor(encryptor);
        const authenticator = new Authenticator(compressor);
        const server = new WebServer(authenticator);
    
        describe("authenticated user", () => {
            const request: HttpRequest = new HttpRequest("admin", "1234");
    
            beforeEach(() => {
                jest.spyOn(console, "log");
                server.handle(request);
            });
    
            it("should have called the entire pipeline", () => {
                expect(console.log).toHaveBeenCalledTimes(3);
            });
    
            it("should authenticate the user", () => {
                expect(console.log).toHaveBeenNthCalledWith(1, "Authenticated: true");
            });
    
            it("should log the request", () => {
                expect(console.log).toHaveBeenNthCalledWith(2, "Compressed");
            });
    
            it("should compress the request", () => {
                expect(console.log).toHaveBeenNthCalledWith(3, "Encrypted");
            });
        });
        
        describe("unauthenticated user", () => {
            const request: HttpRequest = new HttpRequest("jonhwick", "doggologger");
    
            beforeEach(() => {
                jest.spyOn(console, "log");
                server.handle(request);
            });
    
            it("should have called the pipeline until the authentication step", () => {
                expect(console.log).toHaveBeenCalledTimes(1);
            });
    
            it("should authenticate the user", () => {
                expect(console.log).toHaveBeenNthCalledWith(1, "Authenticated: false");
            });
        });
    });
});