import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { prisma } from '../database/prisma/prisma'

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'supersecretkey',
}

passport.use(
  new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
      const user = await prisma.usuario.findUnique({
        where: { usuario_id: payload.sub },
      })

      if (user) return done(null, user)
      return done(null, false)
    } catch (err) {
      return done(err, false)
    }
  })
)

export default passport
