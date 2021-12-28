const appleSignin = require('apple-signin-auth');
require("dotenv").config();

exports.handler = async event => {
    try {
        const body = JSON.parse(event.body);
        const {
            email,
            fullName,
            identityToken
        } = body;
        const clientId = process.env.CLIENT_ID;
        
        console.log(`${email} : ${fullName} : ${clientId}`);

        // verify token (will throw error if failure)
        const { sub: userAppleId } = await
            appleSignin.verifyIdToken(identityToken, {
                audience: clientId,
                ignoreExpiration: true, // ignore token expiry (never expires)
            });

        if (appleUserId === body.appleUserId) {
            //details match, continue with sign in process
            return {
                statusCode: 200,
                body: JSON.stringify({
                    ack: 'success',
                    message: 'identityToken verefied'
                })
            }
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    ack: 'error',
                    message: 'failed to verify identityToken'
                })
            }
        }
        
    } catch (e) {
        console.log(e);
        return {
            statusCode: 200,
            body: JSON.stringify({
                ack: 'error',
                message: 'failed to verify identityToken'
            })
        }

    }

}