const passport = require('passport');

const LocalStrategy = require('./auth/strategies/localStrategy');
const JwtStrategy = require('./auth/strategies/jwtStrategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
