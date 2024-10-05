import NextAuth from "next-auth";
import Cognito from "next-auth/providers/cognito";

export const option ={
    providers: [
        Cognito({
            clientId: "2cpgnl8b01qeagvclbj6e8fauds",
            clientSecret: "1dn9qiic5anmfj2korvk06nha4q6e7lged73gkrcdgnrjjkbndl",
            issuer: "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_PIDvpVAQO",
        })
    ]
}
