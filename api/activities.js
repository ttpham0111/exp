'use strict'

const axios = require('axios')
const express = require('express')

const router = express.Router()
const BACKEND_URL = process.env.BACKEND_URL

router.get('/', (req, res) => {
  res.json([
    {
        "name": "Abercrombie & Fitch",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/4tKa7KbHX6E--XHrdR4pBA/o.jpg",
        "starts_at": null,
        "ends_at": null,
        "source": "yelp",
        "source_metadata": {
            "location": {
                "city": "Santa Clara",
                "country": "US",
                "address1": "2855 Stevens Creek Blvd",
                "address2": "",
                "address3": "Valley Fair Mall",
                "state": "CA",
                "zip_code": "95050"
            },
            "rating": 2,
            "review_count": 65,
            "url": "https://www.yelp.com/biz/abercrombie-and-fitch-santa-clara?adjust_creative=EN7quCKhC-wTD-Au5WzMcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EN7quCKhC-wTD-Au5WzMcA"
        }
    },
    {
        "name": "Abercrombie & Fitch Outlet",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Mc1HHDak7qoVxDneIUi6VA/o.jpg",
        "starts_at": null,
        "ends_at": null,
        "source": "yelp",
        "source_metadata": {
            "location": {
                "city": "Milpitas",
                "country": "US",
                "address1": "447 Great Mall Dr",
                "address2": "",
                "address3": "",
                "state": "CA",
                "zip_code": "95035"
            },
            "rating": 2.5,
            "review_count": 29,
            "url": "https://www.yelp.com/biz/abercrombie-and-fitch-outlet-milpitas?adjust_creative=EN7quCKhC-wTD-Au5WzMcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EN7quCKhC-wTD-Au5WzMcA"
        }
    },
    {
        "name": "Hollister Outlet",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/zIep0n3NB9kDU-L58gVqZQ/o.jpg",
        "starts_at": null,
        "ends_at": null,
        "source": "yelp",
        "source_metadata": {
            "location": {
                "city": "Milpitas",
                "country": "US",
                "address1": "447 Great Mall Dr",
                "address2": "",
                "address3": "",
                "state": "CA",
                "zip_code": "95035"
            },
            "rating": 2.5,
            "review_count": 32,
            "url": "https://www.yelp.com/biz/hollister-outlet-milpitas-2?adjust_creative=EN7quCKhC-wTD-Au5WzMcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EN7quCKhC-wTD-Au5WzMcA"
        }
    },
    {
        "name": "Golf Tech",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/mlBmz4aPNThvy4sySMoD7Q/o.jpg",
        "starts_at": null,
        "ends_at": null,
        "source": "yelp",
        "source_metadata": {
            "location": {
                "city": "Sunnyvale",
                "country": "US",
                "address1": "659 S Bernardo Ave",
                "address2": "",
                "address3": "",
                "state": "CA",
                "zip_code": "94087"
            },
            "rating": 4,
            "review_count": 27,
            "url": "https://www.yelp.com/biz/golf-tech-sunnyvale-4?adjust_creative=EN7quCKhC-wTD-Au5WzMcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EN7quCKhC-wTD-Au5WzMcA"
        }
    },
    {
        "name": "Marshalls",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ijGDstT87ZkbXZZ2CN2yxg/o.jpg",
        "starts_at": null,
        "ends_at": null,
        "source": "yelp",
        "source_metadata": {
            "location": {
                "city": "Mountain View",
                "country": "US",
                "address1": "1040 Grant Rd",
                "address2": "",
                "address3": "",
                "state": "CA",
                "zip_code": "94040"
            },
            "rating": 3.5,
            "review_count": 86,
            "url": "https://www.yelp.com/biz/marshalls-mountain-view?adjust_creative=EN7quCKhC-wTD-Au5WzMcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EN7quCKhC-wTD-Au5WzMcA"
        }
    },
    {
        "name": "Crossroads Trading Co.",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/luszsnAiWD7yG1D5dNEDqg/o.jpg",
        "starts_at": null,
        "ends_at": null,
        "source": "yelp",
        "source_metadata": {
            "location": {
                "city": "San Jose",
                "country": "US",
                "address1": "1959 W San Carlos St",
                "address2": "",
                "address3": "",
                "state": "CA",
                "zip_code": "95128"
            },
            "rating": 3,
            "review_count": 480,
            "url": "https://www.yelp.com/biz/crossroads-trading-co-san-jose-5?adjust_creative=EN7quCKhC-wTD-Au5WzMcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EN7quCKhC-wTD-Au5WzMcA"
        }
    },
    {
        "name": "Soccer Pro",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Q0DlpS-sLoGR8lJC3a9pRQ/o.jpg",
        "starts_at": null,
        "ends_at": null,
        "source": "yelp",
        "source_metadata": {
            "location": {
                "city": "San Jose",
                "country": "US",
                "address1": "1338 Saratoga Ave",
                "address2": "",
                "address3": "",
                "state": "CA",
                "zip_code": "95129"
            },
            "rating": 3.5,
            "review_count": 42,
            "url": "https://www.yelp.com/biz/soccer-pro-san-jose-2?adjust_creative=EN7quCKhC-wTD-Au5WzMcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EN7quCKhC-wTD-Au5WzMcA"
        }
    },
    {
        "name": "David's Bridal",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/NzSKe0OMW13J4oJMOCx4VA/o.jpg",
        "starts_at": null,
        "ends_at": null,
        "source": "yelp",
        "source_metadata": {
            "location": {
                "city": "San Jose",
                "country": "US",
                "address1": "3111 Stevens Creek Blvd",
                "address2": "",
                "address3": "",
                "state": "CA",
                "zip_code": "95117"
            },
            "rating": 3,
            "review_count": 915,
            "url": "https://www.yelp.com/biz/davids-bridal-san-jose?adjust_creative=EN7quCKhC-wTD-Au5WzMcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EN7quCKhC-wTD-Au5WzMcA"
        }
    },
    {
        "name": "Target",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/qytd8r0lBTjWQC3pIcBSqQ/o.jpg",
        "starts_at": null,
        "ends_at": null,
        "source": "yelp",
        "source_metadata": {
            "location": {
                "city": "Cupertino",
                "country": "US",
                "address1": "20745 Stevens Creek Blvd",
                "address2": "",
                "address3": "",
                "state": "CA",
                "zip_code": "95014"
            },
            "rating": 3,
            "review_count": 231,
            "url": "https://www.yelp.com/biz/target-cupertino?adjust_creative=EN7quCKhC-wTD-Au5WzMcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EN7quCKhC-wTD-Au5WzMcA"
        }
    },
    {
        "name": "Crate & Barrel",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/TRCEiUIz9SctlgEyy5hcNQ/o.jpg",
        "starts_at": null,
        "ends_at": null,
        "source": "yelp",
        "source_metadata": {
            "location": {
                "city": "San Jose",
                "country": "US",
                "address1": "301 Santana Row",
                "address2": "",
                "address3": "",
                "state": "CA",
                "zip_code": "95128"
            },
            "rating": 4,
            "review_count": 148,
            "url": "https://www.yelp.com/biz/crate-and-barrel-san-jose?adjust_creative=EN7quCKhC-wTD-Au5WzMcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EN7quCKhC-wTD-Au5WzMcA"
        }
    },
    {
        "name": "Red Skull Tactical",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/UZR3W9kyIgpAUS3R-6XbEw/o.jpg",
        "starts_at": null,
        "ends_at": null,
        "source": "yelp",
        "source_metadata": {
            "location": {
                "city": "Milpitas",
                "country": "US",
                "address1": "1825 Houret Ct",
                "address2": "",
                "address3": "",
                "state": "CA",
                "zip_code": "95035"
            },
            "rating": 4.5,
            "review_count": 57,
            "url": "https://www.yelp.com/biz/red-skull-tactical-milpitas-3?adjust_creative=EN7quCKhC-wTD-Au5WzMcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EN7quCKhC-wTD-Au5WzMcA"
        }
    },
    {
        "name": "Target",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vtN2A3PgxTFOa163YadAJg/o.jpg",
        "starts_at": null,
        "ends_at": null,
        "source": "yelp",
        "source_metadata": {
            "location": {
                "city": "San Jose",
                "country": "US",
                "address1": "1600 Saratoga Ave",
                "address2": "",
                "address3": "",
                "state": "CA",
                "zip_code": "95129"
            },
            "rating": 3.5,
            "review_count": 273,
            "url": "https://www.yelp.com/biz/target-san-jose-8?adjust_creative=EN7quCKhC-wTD-Au5WzMcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EN7quCKhC-wTD-Au5WzMcA"
        }
    },
    {
        "name": "The Pruneyard Shopping Center",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Rqxf2nJ_oXxjVz6ypWiRLA/o.jpg",
        "starts_at": null,
        "ends_at": null,
        "source": "yelp",
        "source_metadata": {
            "location": {
                "city": "Campbell",
                "country": "US",
                "address1": "1875 S Bascom Ave",
                "address2": "",
                "address3": "",
                "state": "CA",
                "zip_code": "95008"
            },
            "rating": 3,
            "review_count": 67,
            "url": "https://www.yelp.com/biz/the-pruneyard-shopping-center-campbell?adjust_creative=EN7quCKhC-wTD-Au5WzMcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=EN7quCKhC-wTD-Au5WzMcA"
        }
    }
]
)
  // return axios.get(BACKEND_URL + '/v1/activities', {params: req.query})
  //   .then(axiosRes => axiosRes.data)
  //   .then(activities => res.json(activities))
  //   .catch(err => {
  //     console.log(err.response.data)
  //   })
})

module.exports = router
