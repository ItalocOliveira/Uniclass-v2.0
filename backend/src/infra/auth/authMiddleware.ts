import { Request, Response, NextFunction } from 'express'

export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as { tipoAcesso: string } | undefined
    if (!user) return res.status(401).json({ message: 'Não autenticado' })

    if (!roles.includes(user.tipoAcesso)) {
      return res.status(403).json({ message: 'Não autorizado' })
    }

    next()
  }
}
