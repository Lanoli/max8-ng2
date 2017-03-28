import { ICategoryIdentifier, IProjectContentIdentifier } from './index'

export interface IProject
{
    id: number
    createdOn?: Date
    name?: string
    order?: number
    categories?: ICategoryIdentifier[]
    projectContent?: IProjectContentIdentifier[]
    introImage?: string
}

