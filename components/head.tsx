import React from "react";
import NextHead from "next/head";

import {settings} from '../utils/settings'

interface Props {
    title?: string;
    description?: string;
}

const Head:React.FC<Props> = ({title = settings.dAppName, description = settings.description}) => {
    return (
        <NextHead>
        <title>{`${title} | ${description}`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
    )
}

export default Head