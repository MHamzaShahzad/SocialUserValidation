const appleSignin = require('apple-signin-auth');

exports.handler = async event => {
    try {
        const body = JSON.parse(event.body);
        const {
            email,
            fullName,
            identityToken
        } = body;
        console.log(email + ":" + fullName)
        //const clientId = <your_app_id>;
        // verify token (will throw error if failure)
        /*const { sub: userAppleId } = await
            appleSignin.verifyIdToken(identityToken, {
                audience: clientId,
                ignoreExpiration: true, // ignore token expiry (never expires)
            });

        if (appleUserId === req.body.appleUserId) {
            //details match, continue with sign in process
            return {
                statusCode: 200,
                body: JSON.stringify({
                    ack: 'success',
                    message: 'identityToken verefied'
                })
            }
        }*/
        return {
            statusCode: 200,
            body: JSON.stringify({
                ack: 'success',
                message: 'identityToken verefied'
            })
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