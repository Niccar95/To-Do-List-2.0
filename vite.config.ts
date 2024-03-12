import checker from "vite-plugin-checker";
export default {
  base: "/To-Do-List-2.0/",
  plugins: [
    checker({
      typescript: true,
    }),
  ],
  build: {
    assetsDir: "assets",
  },
};
