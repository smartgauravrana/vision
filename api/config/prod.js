module.exports = {
    'facebookAuth': {
        'clientId': process.env.FACEBOOK_CLIENT_ID,
        'clientSecret': process.env.FACEBOOK_CLIENT_SECRET,
        'callbackURL': 'api/auth/facebook/callback'
    },
    'googleAuth': {
        'clientId': process.env.GOOGLE_CLIENT_ID,
        'clientSecret': process.env.GOOGLE_CLIENT_SECRET,
        'callbackURL': 'api/auth/google/callback'
    }
}