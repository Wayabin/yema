import React, { useState, useEffect } from "react";
import Layout from "../componets/layouts/Layout";
import Card from "../componets/Card";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import axios from "axios";

const query = `
query{
  launchesPast(limit: 12) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
      wikipedia
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
    ships {
      name
      home_port
      image
    }
  }
}
`;

const variables = {};

const IndexPage = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post("https://api.spacex.land/graphql/", {
          query,
          variables,
        });

        console.log(
          "response.data.launchesPast",
          response.data.data.launchesPast
        );

        setItems(response.data.data.launchesPast);
        setLoaded(true);
      } catch (error) {
        // If there's an error, set the error to the state
        //   this.setState(() => ({ error }));
      }
    })();
  }, []);

  return (
    <Layout>
      <div className="container h-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto ">
          {!isLoaded && (
            <div className="container flex justify-center">
              <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            </div>
          )}
          {items.map((item) => (
            <Card key={Math.random().toString(32).slice(2)} item={item} />
          ))}
        </div>

        {items.length > 0 && (
          <div className=" container bg-gray-100 mb-20 h-20 flex justify-center items-center">
            <h1>pagination</h1>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withApollo()(IndexPage);
