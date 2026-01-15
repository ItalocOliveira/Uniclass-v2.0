import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt'
import { prisma } from '../database/prisma/prisma'

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'supersecretkey',  
}

export const jwtStrategy = new JwtStrategy(options, async (payload, done) => {
  try {
    const user = await prisma.usuario.findUnique({
      where: { usuario_id: payload.sub }, 
    })

    if (!user) return done(null, false) 
    return done(null, user)
  } catch (err) {
    return done(err, false)
  }
})
