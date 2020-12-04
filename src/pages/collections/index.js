import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import CollectionGrid from "../../components/CollectionsGrid";

// Styles, Fonts, Images
import styles from "../../styles/pages/collections.module.scss";

const Collections = () => {

    const [isLoading, setLoading] = useState(true);
    const [collections, setCollections] = useState();
    const [assets, setAssets] = useState();

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3000/collections"
        })
            .then(result => {
                setCollections(result.data);

                axios({
                    method: "get",
                    url: "http://localhost:3000/assets"
                })
                    .then(result => {
                        setAssets(result.data);
                        setLoading(false);
                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const getLink = (name) => {
        let link = `/collections#${name.replace(/ /g, "")}`
        return link
    }

    const getAssetsForCollection = (collection) => {
        const assetsForCollection = assets.filter(asset => asset.collectionType === collection.name);
        return assetsForCollection
    }

    // Rendering

    return (
        <Layout
            pageMeta={{
                title: "Collections | Art by Jaret",
                description: "View the collection of Jaret's current & previous work.",
                canonical: "/collections",
            }}
            landing={{
                heading: "Collections",
                text: "View the collection of Jaret's current & previous work."
            }}
        >

            {isLoading ? <div className="App">Loading...</div> :
                collections.map((collection, index) => (
                    <Section
                        heading={collection.name}
                        stroke={index % 2 === 0 ? "green" : "blue"}
                        key={index}
                    >
                        <CollectionGrid assets={getAssetsForCollection(collection)} />
                    </Section>
                ))
            }
        </Layout>
    )
}

export default Collections;