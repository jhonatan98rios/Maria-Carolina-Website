import Head from 'next/head'
import React from 'react'

export default function SEO() {

  const title = "Maria Carolina dos Anjos - Advogada"
  const description = "Precisa de um advogado? Entre em contato agora mesmo"
  const ico = "/favicon.ico"

  return (
    <Head>
      <title> { title } </title>

      <meta name="description" content={description} />
      <meta name="image" content={ico} />

      <link rel="icon" href={ico} />

      <meta httpEquiv="x-ua-compatible" content="IE=edge" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#302F38" />
      <meta name="msapplication-TileColor" content="#302F38" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />
      <meta name="keywords" content="advogado, direito criminal, direito civil, direito do consumidor, direito contratual" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="blog" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={ico} />
      <meta property="og:image:secure_url" content="" />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="360" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ContactstSmart" />
      <meta name="twitter:creator" content="@ContactstSmart" />
      <meta name="twitter:image" content={ico} />
      <meta name="twitter:image:src" content={ico} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta property="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="800" />
      <meta name="twitter:image:height" content="360" />

    </Head>
  )
}