"use client";
import React, { createContext, useContext } from "react";

const MetadataContext = createContext();

export const MetadataProvider = ({ metadata, children }) => {
  return (
    <MetadataContext.Provider value={metadata}>
      {children}
    </MetadataContext.Provider>
  );
};

export const useMetadata = () => {
  return useContext(MetadataContext);
};
