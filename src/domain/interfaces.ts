import Post from './models/Post'
import Site from './models/Site'
import Work from './models/Work'
import Inquiry from './models/Inquiry'
import Page from './models/Page'

export interface IPostRepository {
  getById(id: string): Promise<Post>
  get(): Promise<Post[]>
  getNext(): Promise<Post[]>
  hasNext(): boolean
}

export interface IPageRepository {
  getById(id: string): Promise<Page | null>
  getBySlug(slug: string): Promise<Page | null>
  get(): Promise<Page[]>
}

export interface IWorkRepository {
  get(): Promise<Work[]>
  getNext(): Promise<Work[]>
  hasNext(): boolean
}

export interface ISiteRepository {
  get(): Promise<Site>
}

export interface IInquiryRepository {
  post(inquiry?: Inquiry): Promise<any>
}

