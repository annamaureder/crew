import React, { useCallback } from "react";

import { User as FirebaseUser } from "firebase/auth";
import {
    Authenticator,
    buildCollection,
    buildProperty,
    FirebaseCMSApp,
} from "@camberi/firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

// TODO: Replace with your config
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const locales = {
    "en-US": "English (United States)",
    "es-ES": "Spanish (Spain)",
    "de-DE": "German"
};

// type Product = {
//     name: string;
//     price: number;
//     status: string;
//     published: boolean;
//     related_products: EntityReference[];
//     main_image: string;
//     tags: string[];
//     description: string;
//     categories: string[];
//     publisher: {
//         name: string;
//         external_id: string;
//     },
//     expires_on: Date
// }

const localeCollection = buildCollection({
    path: "locale",
    customId: locales,
    name: "Locales",
    singularName: "Locales",
    properties: {
        name: {
            name: "Title",
            validation: { required: true },
            dataType: "string"
        },
        selectable: {
            name: "Selectable",
            description: "Is this locale selectable",
            dataType: "boolean"
        },
        video: {
            name: "Video",
            dataType: "string",
            validation: { required: false },
            storage: {
                storagePath: "videos",
                acceptedFiles: ["video/*"]
            }
        }
    }
});

type Post = {
    name: string;
    description: string;
    status: string;
    published: boolean;
    main_image: string;
    tags: string[];
    publisher: {
        name: string;
        external_id: string;
    }
}

const postsCollection = buildCollection<Post>({
    name: "Posts",
    singularName: "Post",
    path: "posts",
    permissions: ({ authController }) => ({
        edit: true,
        create: true,
        // we have created the roles object in the navigation builder
        delete: false
    }),
    subcollections: [
        localeCollection
    ],
    properties: {
        name: {
            name: "Name",
            validation: { required: true },
            dataType: "string"
        },
        status: {
            name: "Status",
            validation: { required: true },
            dataType: "string",
            description: "Should this post be visible in the website",
            longDescription: "Example of a long description hidden under a tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis bibendum turpis. Sed scelerisque ligula nec nisi pellentesque, eget viverra lorem facilisis. Praesent a lectus ac ipsum tincidunt posuere vitae non risus. In eu feugiat massa. Sed eu est non velit facilisis facilisis vitae eget ante. Nunc ut malesuada erat. Nullam sagittis bibendum porta. Maecenas vitae interdum sapien, ut aliquet risus. Donec aliquet, turpis finibus aliquet bibendum, tellus dui porttitor quam, quis pellentesque tellus libero non urna. Vestibulum maximus pharetra congue. Suspendisse aliquam congue quam, sed bibendum turpis. Aliquam eu enim ligula. Nam vel magna ut urna cursus sagittis. Suspendisse a nisi ac justo ornare tempor vel eu eros.",
            enumValues: {
                private: "Private",
                public: "Public"
            }
        },
        published: ({ values }) => buildProperty({
            name: "Published",
            dataType: "boolean",
            columnWidth: 100,
            disabled: (
                values.status === "public"
                    ? false
                    : {
                        clearOnDisabled: true,
                        disabledMessage: "Status must be public in order to enable this the published flag"
                    }
            )
        }),
        main_image: buildProperty({ // The `buildProperty` method is a utility function used for type checking
            name: "Image",
            dataType: "string",
            storage: {
                storagePath: "images",
                acceptedFiles: ["image/*"]
            }
        }),
        tags: {
            name: "Tags",
            description: "Example of generic array",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "string"
            }
        },
        description: {
            name: "Description",
            description: "Not mandatory but it'd be awesome if you filled this up",
            longDescription: "Example of a long description hidden under a tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis bibendum turpis. Sed scelerisque ligula nec nisi pellentesque, eget viverra lorem facilisis. Praesent a lectus ac ipsum tincidunt posuere vitae non risus. In eu feugiat massa. Sed eu est non velit facilisis facilisis vitae eget ante. Nunc ut malesuada erat. Nullam sagittis bibendum porta. Maecenas vitae interdum sapien, ut aliquet risus. Donec aliquet, turpis finibus aliquet bibendum, tellus dui porttitor quam, quis pellentesque tellus libero non urna. Vestibulum maximus pharetra congue. Suspendisse aliquam congue quam, sed bibendum turpis. Aliquam eu enim ligula. Nam vel magna ut urna cursus sagittis. Suspendisse a nisi ac justo ornare tempor vel eu eros.",
            dataType: "string",
            columnWidth: 300
        },
        publisher: {
            name: "Publisher",
            description: "This is an example of a map property",
            dataType: "map",
            properties: {
                name: {
                    name: "Name",
                    dataType: "string"
                },
                external_id: {
                    name: "External id",
                    dataType: "string"
                }
            }
        }
    }
});

type User = {
    firstname: string;
    lastname: string;
    bio: string;
    status: string;
    birthday: Date;
    employment_start_date: Date;
    employment_end_date: Date;
    main_image: string;
    tags: string[];
    publisher: {
        name: string;
        external_id: string;
    }
}

const usersCollection = buildCollection<User>({
    name: "Users",
    singularName: "User",
    path: "users",
    permissions: ({ authController }) => ({
        edit: true,
        create: true,
        // we have created the roles object in the navigation builder
        delete: false
    }),
    subcollections: [
        localeCollection
    ],
    properties: {
        firstname: {
            name: "Firstname",
            validation: { required: true },
            dataType: "string"
        },
        lastname: {
            name: "Lastname",
            validation: { required: true },
            dataType: "string"
        },
        bio: {
            name: "Bio",
            description: "Not mandatory but it'd be awesome if you filled this up",
            longDescription: "Example of a long description hidden under a tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis bibendum turpis. Sed scelerisque ligula nec nisi pellentesque, eget viverra lorem facilisis. Praesent a lectus ac ipsum tincidunt posuere vitae non risus. In eu feugiat massa. Sed eu est non velit facilisis facilisis vitae eget ante. Nunc ut malesuada erat. Nullam sagittis bibendum porta. Maecenas vitae interdum sapien, ut aliquet risus. Donec aliquet, turpis finibus aliquet bibendum, tellus dui porttitor quam, quis pellentesque tellus libero non urna. Vestibulum maximus pharetra congue. Suspendisse aliquam congue quam, sed bibendum turpis. Aliquam eu enim ligula. Nam vel magna ut urna cursus sagittis. Suspendisse a nisi ac justo ornare tempor vel eu eros.",
            dataType: "string",
            columnWidth: 300
        },
        birthday: {
            name: "Birthday",
            validation: { required: true },
            dataType: "date"
        },
        employment_start_date: {
            name: "Employment start date",
            dataType: "date"
        },
        employment_end_date: {
            name: "Employment start date",
            dataType: "date"
        },
        status: {
            name: "Status",
            validation: { required: true },
            dataType: "string",
            description: "Should this user be visible in the website",
            longDescription: "Example of a long description hidden under a tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis bibendum turpis. Sed scelerisque ligula nec nisi pellentesque, eget viverra lorem facilisis. Praesent a lectus ac ipsum tincidunt posuere vitae non risus. In eu feugiat massa. Sed eu est non velit facilisis facilisis vitae eget ante. Nunc ut malesuada erat. Nullam sagittis bibendum porta. Maecenas vitae interdum sapien, ut aliquet risus. Donec aliquet, turpis finibus aliquet bibendum, tellus dui porttitor quam, quis pellentesque tellus libero non urna. Vestibulum maximus pharetra congue. Suspendisse aliquam congue quam, sed bibendum turpis. Aliquam eu enim ligula. Nam vel magna ut urna cursus sagittis. Suspendisse a nisi ac justo ornare tempor vel eu eros.",
            enumValues: {
                applied: "Applied",
                active: "Active",
                offboarding: "Offboarding",
                inactive: "inactive"
            }
        },
        main_image: buildProperty({ // The `buildProperty` method is a utility function used for type checking
            name: "Image",
            dataType: "string",
            storage: {
                storagePath: "images",
                acceptedFiles: ["image/*"]
            }
        }),
        tags: {
            name: "Tags",
            description: "Example of generic array",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "string"
            }
        },
        publisher: {
            name: "Publisher",
            description: "This is an example of a map property",
            dataType: "map",
            properties: {
                name: {
                    name: "Name",
                    dataType: "string"
                },
                external_id: {
                    name: "External id",
                    dataType: "string"
                }
            }
        }
    }
});

type Community = {
    name: string;
    image: string;
    street: string;
    city: string;
    employees: string[];
}

const communityCollection = buildCollection<Community>({
    name: "Communitys",
    singularName: "Community",
    path: "community",
    permissions: ({ authController }) => ({
        edit: true,
        create: true,
        // we have created the roles object in the navigation builder
        delete: false
    }),
    subcollections: [
        localeCollection
    ],
    properties: {
        name: {
            name: "Name",
            validation: { required: true },
            dataType: "string"
        },
        image: {
            name: "Image",
            validation: { required: true },
            dataType: "string"
        },
        street: {
            name: "Street",
            validation: { required: true },
            dataType: "string"
        },
        city: {
            name: "City",
            validation: { required: true },
            dataType: "string"
        },
        employees: {
            name: "Employees",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "string"
            }
        },
    }
});

type Discovery  = {
    name: string;
    description: string;
    provider: string;
    image: string;
    street: string;
    city: string;
    duration: string;
    start: string;
    category: string
    numberSeatTotal: number;
    numberSeatLeft: number;
    date: Date;
}

const discoveryCollection = buildCollection<Discovery>({
    name: "Discovery",
    singularName: "Discovery",
    path: "discovery",
    permissions: ({ authController }) => ({
        edit: true,
        create: true,
        // we have created the roles object in the navigation builder
        delete: false
    }),
    subcollections: [
        localeCollection
    ],
    properties: {
        name: {
            name: "Name",
            validation: { required: true },
            dataType: "string"
        },
        description: {
            name: "Description",
            validation: { required: true },
            dataType: "string",
            columnWidth: 300
        },
        provider: {
            name: "Provider",
            validation: { required: true },
            dataType: "string"
        },
        image: {
            name: "Image",
            validation: { required: true },
            dataType: "string"
        },
        street: {
            name: "Street",
            validation: { required: true },
            dataType: "string"
        },
        city: {
            name: "City",
            validation: { required: true },
            dataType: "string"
        },
        duration: {
            name: "Duration",
            validation: { required: true },
            dataType: "string"
        },
        start: {
            name: "Start",
            validation: { required: true },
            dataType: "string"
        },
        category: {
            name: "Category",
            validation: { required: true },
            dataType: "string"
        },
        numberSeatTotal: {
            name: "Seat Total",
            validation: { required: true },
            dataType: "number"
        },
        numberSeatLeft: {
            name: "Seat Left",
            validation: { required: true },
            dataType: "number"
        },
        date: {
            name: "Date",
            dataType: "date"
        },
    }
});


type Profile   = {
    firstname: string;
    lastname: string;
    position: string;
    company: string;
    qrCodeImage: string;
    id: number;
}

const profileCollection = buildCollection<Profile >({
    name: "Profiles",
    singularName: "Profile",
    path: "profile",
    permissions: ({ authController }) => ({
        edit: true,
        create: true,
        // we have created the roles object in the navigation builder
        delete: false
    }),
    subcollections: [
        localeCollection
    ],
    properties: {
        firstname: {
            name: "Firstname",
            validation: { required: true },
            dataType: "string"
        },
        lastname: {
            name: "Lastname",
            validation: { required: true },
            dataType: "string"
        },
        position: {
            name: "Position",
            validation: { required: true },
            dataType: "string"
        },
        company: {
            name: "Company",
            validation: { required: true },
            dataType: "string"
        },
        qrCodeImage: {
            name: "QR Code",
            validation: { required: true },
            dataType: "string"
        },
        id: {
            name: "ID",
            validation: { required: true },
            dataType: "number"
        }
    }
});

export default function App() {

    const myAuthenticator: Authenticator<FirebaseUser> = useCallback(async ({
                                                                    user,
                                                                    authController
                                                                }) => {

        if (user?.email?.includes("flanders")) {
            throw Error("Stupid Flanders!");
        }

        console.log("Allowing access to", user?.email);
        // This is an example of retrieving async data related to the user
        // and storing it in the user extra field.
        const sampleUserRoles = await Promise.resolve(["admin"]);
        authController.setExtra(sampleUserRoles);

        return true;
    }, []);

    return <FirebaseCMSApp
        name={"CREW"}
        authentication={myAuthenticator}
        collections={[communityCollection, discoveryCollection, profileCollection]}
        firebaseConfig={firebaseConfig}
    />;
}