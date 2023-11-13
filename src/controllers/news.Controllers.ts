import { Request, Response, NextFunction } from 'express'
import getNewsService from '../services/news/getNews.service'
import { Languages } from '../types/news.types'
import { ResponseStatus } from '../types/response.types'

class NewsController {
  // pet requests
  public async GetNewsEs (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { pageSize, page } = req.query
    let pageSizeInt = 10
    let pageInt = 1
    try {
      pageSizeInt = Number(pageSize === undefined ? 10 : pageSize)
      pageInt = Number(page === undefined ? 1 : page)
    } catch (err) {
      res.status(ResponseStatus.BAD_REQUEST).json({ message: 'PageSize and Page must be Integers' })
      return
    }
    const lan = Languages.es
    const response = await getNewsService.getNews(lan, pageSizeInt, pageInt)
    res.status(response.status).json(response.answer)
  }

  public async GetNewsEn (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { pageSize, page } = req.query
    let pageSizeInt = 10
    let pageInt = 1
    try {
      pageSizeInt = Number(pageSize)
      pageInt = Number(page)
    } catch (err) {
      res.status(ResponseStatus.BAD_REQUEST).json({ message: 'PageSize and Page must be Integers' })
      return
    }
    const lan = Languages.en
    const response = await getNewsService.getNews(lan, pageSizeInt, pageInt)
    res.status(response.status).json(response.answer)
  }
}
export default new NewsController()
