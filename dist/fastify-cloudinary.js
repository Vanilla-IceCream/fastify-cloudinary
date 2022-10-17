import m from "fastify-plugin";
import { v2 as s } from "cloudinary";
const h = m(
  async (l, r) => {
    if (!r.url)
      throw Error("`url` parameter is mandatory");
    const u = (d) => {
      var a, i;
      const e = new URL(d), c = (n, f) => Object.keys(n).reduce(
        (o, t) => f.includes(t) ? o : { ...o, [t]: n[t] },
        {}
      );
      return {
        cloud_name: e.host,
        api_key: (a = e.auth) == null ? void 0 : a.split(":")[0],
        api_secret: (i = e.auth) == null ? void 0 : i.split(":")[1],
        ...c(r, ["url"])
      };
    };
    s.config(u(r.url)), l.decorate("cloudinary", s);
  },
  {
    fastify: "4.x",
    name: "fastify-cloudinary"
  }
);
export {
  h as default
};
