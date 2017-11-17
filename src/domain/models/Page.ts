import Model from '../lib/Model'

export interface PageType {
  id: string
  title: string
  content: string
  slug: string
}

export default class Page extends Model<PageType> {
  id: string
  title: string
  content: string
  slug: string

  constructor(props: PageType) {
    super(props)
    this.title = props.title
    this.content = props.content
    this.slug = props.slug
  }
}

