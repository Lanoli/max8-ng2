import { ICategory, IProjectContentIdentifier } from './index'

export interface IProject
{
    id: number
    createdOn?: Date
    name?: string
    order?: number
    categories?: ICategory[]
    projectContent?: IProjectContentIdentifier[]
    thumbnail1?: string
    thumbnail2?: string
    thumbnail3?: string
    
}

