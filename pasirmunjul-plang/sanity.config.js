import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'pasirmunjul-plang',

  projectId: 'vghrh64q',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Desa Pasirmunjul CMS')
          .items([
            // 1. Singleton: Profil Singkat & Statistik
            S.listItem()
              .title('Profil Singkat & Statistik')
              .id('profilSingkat')
              .child(
                S.document()
                  .schemaType('profilSingkat')
                  .documentId('profilSingkat')
                  .title('Edit Profil Singkat & Statistik')
              ),
            // 2. Singleton: Visi & Misi
            S.listItem()
              .title('Visi & Misi')
              .id('visiMisi')
              .child(
                S.document()
                  .schemaType('visiMisi')
                  .documentId('visiMisi')
                  .title('Edit Visi & Misi')
              ),
            // 3. Singleton: Struktur Organisasi
            S.listItem()
              .title('Struktur Organisasi')
              .id('struktur')
              .child(
                S.document()
                  .schemaType('struktur')
                  .documentId('struktur')
                  .title('Edit Struktur Organisasi')
              ),
            
            S.divider(), // Visual divider for Hamlets

            // 4. Singleton: Dusun 1
            S.listItem()
              .title('Dusun 1 (Sentra UMKM)')
              .id('dusun-1')
              .child(
                S.document()
                  .schemaType('dusun')
                  .documentId('dusun-1')
                  .title('Edit Data Dusun 1')
              ),
            // 5. Singleton: Dusun 2
            S.listItem()
              .title('Dusun 2 (Pemukiman & Konservasi)')
              .id('dusun-2')
              .child(
                S.document()
                  .schemaType('dusun')
                  .documentId('dusun-2')
                  .title('Edit Data Dusun 2')
              ),
            // 6. Singleton: Dusun 3
            S.listItem()
              .title('Dusun 3 (Kekayaan Alam & Tani)')
              .id('dusun-3')
              .child(
                S.document()
                  .schemaType('dusun')
                  .documentId('dusun-3')
                  .title('Edit Data Dusun 3')
              ),

            S.divider(), // Visual divider for other content

            // 7. Singleton: Informasi Umum Desa
            S.listItem()
              .title('Informasi Umum Desa')
              .id('villageInfo')
              .child(
                S.document()
                  .schemaType('villageInfo')
                  .documentId('villageInfo')
                  .title('Edit Informasi Umum Desa')
              ),
            // 8. Kabar Desa (Blog) - Regular Document (Multi-document List)
            S.documentTypeListItem('post').title('Kabar Desa (Blog)'),
            
            // Filter out singleton types from default list to avoid duplication in menu
            ...S.documentTypeListItems().filter(
              (listItem) => !['villageInfo', 'profilSingkat', 'visiMisi', 'struktur', 'dusun', 'post'].includes(listItem.getId())
            ),
          ])
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Restrict actions for singletons: only allow edit/publish (no delete, duplicate, or unpublish)
    actions: (prev, context) => {
      const singletonTypes = new Set(['villageInfo', 'profilSingkat', 'visiMisi', 'struktur', 'dusun'])
      return singletonTypes.has(context.schemaType)
        ? prev.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : prev
    },
    // Prevent creating new templates or duplicated documents for singletons
    newDocumentOptions: (prev, context) => {
      const singletonTypes = new Set(['villageInfo', 'profilSingkat', 'visiMisi', 'struktur', 'dusun'])
      return prev.filter((templateItem) => !singletonTypes.has(templateItem.templateId))
    }
  }
})
