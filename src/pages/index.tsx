import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from "next/head";
import tw, { styled, TwStyle } from 'twin.macro';

const IndexPage: NextPage = () => {
  return (
    <div tw="w-screen h-screen flex justify-center items-center">
      <div>
        <h1>Nextjs starter</h1>
      </div>
    </div>
  );
};


export default IndexPage;
