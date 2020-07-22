import React from "react";
import Layout from "../componets/layouts/Layout";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { withApollo } from "../lib/apollo";

const Nosotros = () => {
  const LAST_LAUNCH = gql`
    query lastLaunch {
      company {
        links {
          flickr
          twitter
          website
        }
        name
        summary
      }
    }
  `;

  const { loading, data, error } = useQuery(LAST_LAUNCH);

  const { name, summary, links } = data?.company ?? {};

  console.log("name", name);

  console.log("loading, data, error", loading, data, error);

  return (
    <Layout>
      {loading && (
        <div className="container flex justify-center">
          <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        </div>
      )}
      <div
        className=" mt-8 py-2 flex-shrink-0 flex flex-col
				bg-gray-100 rounded-lg text-blue-500"
      >
        <h3
          className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
					capitalize"
        >
          <span>{name} </span>
          <button className="ml-2">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
              <path
                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"
              ></path>
            </svg>
          </button>
        </h3>

        <div className="flex flex-col items-center mt-12">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-2130362-1800926.png"
            alt=" empty schedule"
          />

          <span className="font-bold mt-8">{name}</span>

          <span className="text-purple-500">{summary}</span>

          <div className="mt-8 flex rounded-lg py-2 px-2">
            <a href={`${links?.website ?? "/"}`}>
              <i className="ml-2 fa fa-link fa-2x"> </i>
            </a>
            <a href={`${links?.twitter ?? "/"}`}>
              <i className="ml-2 fa fa-twitter-square fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withApollo()(Nosotros);
