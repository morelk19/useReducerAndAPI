export default function apiReducer(posts, action){
    switch (action.type) {
        case 'get-all-posts' :
            let payloadArr = action.payload.map(element => {
                return {
                        userId: element.userId,
                        id: element.id,
                        title: element.title,
                        body: element.body
                        }
            })
            // console.log(payloadArr)
            return [...payloadArr]
        case 'add-all-todos' :
            let toDosArr = action.payload.map(element => {
                return {
                        userId: element.userId,
                        id: element.id,
                        title: element.title,
                        completed: element.completed
                        }
            })
            // console.log(payloadArr)
            return [...toDosArr]
    
            case 'add-all-users' :
                let usersArr = action.payload.map(element => {
                    return {
                            id: element.id,
                            name: element.name,
                            username: element.username,
                            email: element.email,
                            address: {
                                street: element.address.street,
                                suite: element.address.suite,
                                city: element.address.city,
                                zipcode: element.address.zipcode,
                                geo: {
                                    lat: element.address.geo.lat,
                                    lng: element.address.geo.lng
                                    }
                            },
                            phone: element.phone,
                            website: element.website,
                            company: {
                                    name: element.company.name,
                                    catchPhrase: element.company.catchPhrase,
                                    bs: element.company.bs
                            }
                            }
                })
                // console.log(payloadArr)
                return [...usersArr]
            default:
                    return posts;

            }

    }