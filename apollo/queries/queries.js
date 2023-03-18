import { gql } from "@apollo/client";

export const GET_ARTIST_LIST = gql`
query MyQuery {
    artists2023(first: 40){
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
export const GET_ARTISTS = gql`
query MyQuery {
    artworks2022(where: {majorWork: true}, first: 40) {
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
                    artists2022 {
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
    artists2023(where: {author: $userId}, first: 30) { 
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
                    artworks2023 {
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
    artworks2023(where: {studio: $studio}, first: 50) { 
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
                    artists2023 {
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