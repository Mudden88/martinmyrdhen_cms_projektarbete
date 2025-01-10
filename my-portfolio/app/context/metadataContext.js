"use client";
import React, { createContext, useContext } from "react";

const MetadataContext = createContext();

export const MetadataProvider = ({ metadataCF, children }) => {
  return (
    <MetadataContext.Provider value={metadataCF}>
      {children}
    </MetadataContext.Provider>
  );
};

export const useMetadata = () => {
  return useContext(MetadataContext);
};
