import Model from '../lib/Model'

export type PostType = {
  id: string
  date: string
  title: {rendered: string}
  content: {rendered: string}
}

export type PostListType  = {[key: string]: PostType}

export default class Post extends Model<PostType> {
  id: string
  date: Date
  title: string
  content: string

  constructor(props: PostType) {
    super(props)
    this.date = new Date(props.date)
    this.title = props.title.rendered
    this.content = props.content.rendered
  }
}


