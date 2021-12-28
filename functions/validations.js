const appleSignin = require('apple-signin-auth');

exports.handler = async event => {
    /*try {
        const { body } = req;
        const {
            email,
            fullName,
            identityToken
        } = body;

        //const clientId = <your_app_id>;
        // verify token (will throw error if failure)
        const { sub: userAppleId } = await
            appleSignin.verifyIdToken(identityToken, {
                audience: clientId,
                ignoreExpiration: true, // ignore token expiry (never expires)
            });

        if (appleUserId === req.body.appleUserId) {
            //details match, continue with sign in process
            res.json({
                ack: 'error',
                message: 'failed to verify identityToken'
            });
        }
    } catch (e) {
        res.json({
            ack: 'error',
            message: 'failed to verify identityToken'
        });
    }*/
    return {
        statusCode: 200,
        body: "Hello World"
    }
}