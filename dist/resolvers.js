import { GraphQLError } from "graphql";
export const resolvers = {
    Query: {
        listeCommandes: async (_, __, { dataSources }) => {
            return dataSources.commandesAPI.getObjects();
        },
        getCommande: async (_, { id }, { dataSources }) => {
            return dataSources.commandesAPI.getObjectById(id);
        },
        produits: async (_, { id }, { dataSources }) => {
            const produits = [
                {
                    "name": "DB Longboards CoreFlex Crossbow 41\" Bamboo Fiberglass Longboard Complete",
                    "category": "Sports & Outdoors | Outdoor Recreation | Skates, Skateboards & Scooters | Skateboarding | Standard Skateboards & Longboards | Longboards",
                    "price": "$237.68",
                    "model": "nan",
                    "about": "Make sure this fits by entering your model number. | RESPONSIVE FLEX: The Crossbow features a bamboo core encased in triaxial fiberglass and HD plastic for a responsive flex pattern that’s second to none. Pumping & carving have never been so satisfying! Flex 2 is recommended for people 120 to 170 pounds. | COREFLEX TECH: CoreFlex construction is water resistant, impact resistant, scratch resistant and has a flex like you won’t believe. These boards combine fiberglass, epoxy, HD plastic and bamboo to create a perfect blend of performance and strength. | INSPIRED BY THE NORTHWEST: Our founding ideal is chasing adventure & riding the best boards possible, inspired by the hills, waves, beaches & mountains all around our headquarters in the Northwest | BEST IN THE WORLD: DB was founded out of sheer love of longboarding with a mission to create the best custom longboards in the world, to do it sustainably, & to treat customers & employees like family | BEYOND COMPARE: Try our skateboards & accessories if you've tried similar products by Sector 9, Landyachtz, Arbor, Loaded, Globe, Orangatang, Hawgs, Powell-Peralta, Blood Orange, Caliber or Gullwing",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/51j3fPQTQkL.jpg|https://images-na.ssl-images-amazon.com/images/I/31hKM3cSoSL.jpg|https://images-na.ssl-images-amazon.com/images/I/51WlHdwghfL.jpg|https://images-na.ssl-images-amazon.com/images/I/51FsyLRBzwL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
                },
                {
                    "name": "Electronic Snap Circuits Mini Kits Classpack, FM Radio, Motion Detector, Music Box (Set of 5)",
                    "category": "Toys & Games | Learning & Education | Science Kits & Toys",
                    "price": "$99.95",
                    "model": "55324",
                    "about": "Make sure this fits by entering your model number. | Snap circuits mini kits classpack provides basic electronic circuitry activities for students in grades 2-6 | Includes 5 separate mini building kits- an FM radio, a motion detector, music box, space battle sound effects, and a flying saucer | Each kit includes separate components and instructions to build | Each component represents one function in a circuit; components snap together to create working models of everyday electronic devices | Activity guide provides additional projects to teach students how circuitry works",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/51M0KnJxjKL.jpg|https://images-na.ssl-images-amazon.com/images/I/5166GD8OkXL.jpg|https://images-na.ssl-images-amazon.com/images/I/61o5S1VnaNL.jpg|https://images-na.ssl-images-amazon.com/images/I/61t4Q0rPYjL.jpg|https://images-na.ssl-images-amazon.com/images/I/61NASUAyqcL.jpg|https://images-na.ssl-images-amazon.com/images/I/51OMrADdyJL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
                },
                {
                    "name": "3Doodler Create Flexy 3D Printing Filament Refill Bundle (X5 Pack, Over 1000'. of Extruded Plastics! - Innovate",
                    "category": "Toys & Games | Arts & Crafts | Craft Kits",
                    "price": "$34.99",
                    "model": "nan",
                    "about": "Make sure this fits by entering your model number. | ✅【Smooth 3D drawing experienced the best 3D drawing experience by only using 3Doodler Create Plastics with 3Doodler Create+ and create 3D Printing pen. | ✅【Safe to use】the 3Doodler Create Plastics, conforms to the health requirements of ASTM-D-4236 & require no additional labelling in accordance with the US Consumer Product safety Commission’s Regulations as mandated by Labeling of Hazardous Art Materials Act (LHAMA). | ?【3Doodler very own Type of plastic】the FLEXY plastic takes creativity to new levels! You can make flexible fun 3D creations! | ?【Environmentally friendly】3doodler create Plastic is made of corn and are 100% compostable! | ✅【125 strands of drawing fun】this bundle includes 5 refill filament packs, that's a total of 1043 ft. Of 3D drawing and doodling fun! | ?【The 3Doodler app】get an interactive experience! The app is packed with dedicated easy to follow stencil section and step by step interactive instructions, receive badges for completed projects and photograph & share YOUR creations directly on social media. The app is fully built on iOS & Android. | ✅【All your favorite colors】this pack includes: green, blue, pink, orange & yellow",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/513cBC8PqpL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
                },
                {
                    "name": "Guillow Airplane Design Studio with Travel Case Building Kit",
                    "category": "Toys & Games | Hobbies | Models & Model Kits | Model Kits | Airplane & Jet Kits",
                    "price": "$28.91",
                    "model": "142",
                    "about": "Make 8 different Planes at one time. | Experiment with different designs and learn about flight. | All contained in Part trays inside an attractive box with carry handle! | Guillow's - your one source for flying toys since 1926. | Made in the USA.",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/516UijZMilL.jpg|https://images-na.ssl-images-amazon.com/images/I/51J6y3oM6VL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
                },
                {
                    "name": "Woodstock- Collage 500 pc Puzzle",
                    "category": "Toys & Games | Puzzles | Jigsaw Puzzles",
                    "price": "$17.49",
                    "model": "62151",
                    "about": "Make sure this fits by entering your model number. | Puzzle has 500 pieces | Completed puzzle measure 14 x 19 | 100% officially licensed merchandise | Great for fans & puzzlers alike",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/61plo8Xv4vL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
                }
            ];
            //return dataSources.produitsAPI.getObjects()
            return produits;
        },
        produitById: async (_, { id }, { dataSources }) => {
            return dataSources.produitsAPI.getObjectById(id);
        },
    },
    Mutation: {
        createPaiement: async (_, { paiement }, { validation, dataSources }) => {
            if (validation) {
                return dataSources.paiementAPI.create(paiement);
            }
            throw new GraphQLError('UNAUTHORIZED', {
                extensions: {
                    code: 'UNAUTHORIZED',
                    http: { status: 401 },
                },
            });
        },
        createCommande: async (_, { commande }, { validation, dataSources }) => {
            if (validation) {
                return dataSources.commandesAPI.create(commande);
            }
            throw new GraphQLError('UNAUTHORIZED', {
                extensions: {
                    code: 'UNAUTHORIZED',
                    http: { status: 401 },
                },
            });
        },
        login: async (_, { email, password }, { dataSources }) => {
            return dataSources.authAPI.login(email, password);
        },
        register: async (_, { firstName, lastName, email, password }, { dataSources }) => {
            return dataSources.authAPI.register(firstName, lastName, email, password);
        }
    },
    Commande: {
        product: async (parent, args, { dataSources }) => {
            const productId = parent.productId;
            return dataSources.produitsAPI.getObjectById(productId);
        }
    },
    Paiement: {
        commande: async (parent, args, { dataSources }) => {
            const commandeId = parent.commandeId;
            return dataSources.commandesAPI.getObjectById(commandeId);
        }
    }
};
