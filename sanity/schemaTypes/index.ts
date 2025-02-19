import { type SchemaTypeDefinition } from 'sanity'
import product from '../schemas/documents/product'
import category from '../schemas/documents/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category],
}
