import Model from '../lib/Model'

export type WorkType = {
  id: string
  acf: {
    awards: string[]
    description: string
    title: string
    thumbnail: string
    url: string
  }
}

export type WorkListType = {[key: string]: WorkType}

export default class Work extends Model<WorkType> {
  id: string
  title: string
  description: string
  thumbnail: string
  url: string

  constructor(props: WorkType) {
    super(props)
    this.title = props.acf.title
    this.description = props.acf.description
    this.thumbnail = props.acf.thumbnail
    this.url = props.acf.url
  }
}

