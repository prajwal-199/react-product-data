import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/products_categories":
        "https://magento.curlnationkw.com/rest/V1/listproducts?lang=en&store=KWD",
      "/products_api":
        "https://magento.curlnationkw.com/rest/V1/products?searchCriteria[filter_groups]",
    },
  },
  plugins: [react()],
});
