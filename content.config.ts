// content.config.ts
import {defineContentConfig, defineCollection} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        personal_blog: defineCollection({
            type: 'page',
            source: 'personal/*.md'
        }),
        dev_blog: defineCollection({
            type: 'page',
            source: 'dev/*.md'
        }),
    }
})