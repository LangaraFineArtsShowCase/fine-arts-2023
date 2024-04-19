import { gql } from "@apollo/client";

export const GET_ARTIST_LIST = gql`
query MyQuery {
    artists2024(first: 40, where:{ status:PUBLISH }){
        nodes {
            artistFields {
                artistName
            }
            author {
                node {
                    userId
                }
            }
            }
        }
    }
`


//where: {orderby: {majorWork: true}} >> Artwork which is ticked in Major Work field
export const GET_ARTISTS_MAJOR = gql`
  query MyQuery {
    artworks2024(where: { majorWork: true, status: PUBLISH }, first: 40) {
      nodes {
        artworkFields {
          artworkTitle
          material
          size
          studio
          thumbnail {
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
        author {
          node {
            userId
            artists2024 {
              nodes {
                artistFields {
                  artistName
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GET_ARTIST = gql`
query MyQuery($userId: Int) {
    artists2024(where: {author: $userId}, first: 30) { 
        nodes {
            artistFields {
                artistName
                blurb
                instagram
                linkedin
                personalWebsite
            }
            author {
                node {
                    userId
                    artworks2024 {
                        nodes {
                            artworkFields {
                                artType
                                artworkTitle
                                image2d {
                                    sourceUrl
                                }
                                image3d1 {
                                    sourceUrl
                                }
                                image3d2 {
                                    sourceUrl
                                }
                                image3d3 {
                                    sourceUrl
                                }
                                material
                                order
                                size
                                studio
                                videoIframe
                                majorWork
                                thumbnail {
                                    mediaItemUrl
                                    mediaDetails {
                                        height
                                        width
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
`

export const GET_STUDIO_WORKS = gql`
query MyQuery($studio: String) {
    artworks2024(where: {studio: $studio}, first: 100) { 
        nodes {
            artworkFields {
                artworkTitle
                material
                size
                studio
                thumbnail {
                    mediaItemUrl
                    mediaDetails {
                        height
                        width
                    }
                }
                videoIframe
                artType
                artworkTitle
                image2d {
                    sourceUrl
                }
                image3d1 {
                    sourceUrl
                }
                image3d2 {
                    sourceUrl
                }
                image3d3 {
                    sourceUrl
                }
            }
            author {
                node {
                    userId
                    artists2024 {
                        nodes {
                            artistFields {
                                artistName
                            }
                        }
                    }
                }
            }
        }
    }
}
`


export const GET_CUSTOM_ARTWORKS = gql`
    query GET_CUSTOM_ARTWORKS {
        customArtworks {
            nodes {
                artworkFields {
                artworkTitle
                artType
                studio
                thumbnail {
                    mediaItemUrl
                    mediaDetails {
                        height
                        width
                        }
                    }
                }
            }
        }
    }
`