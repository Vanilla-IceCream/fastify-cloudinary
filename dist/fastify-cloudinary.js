import { urlToHttpOptions as p } from "url";
import u from "fastify-plugin";
import { v2 as e } from "cloudinary";
const f = u(
  async (i, t) => {
    const n = (s = "") => {
      var a, o;
      const r = p(new URL(s));
      return {
        cloud_name: r.hostname || void 0,
        api_key: (a = r.auth) == null ? void 0 : a.split(":")[0],
        api_secret: (o = r.auth) == null ? void 0 : o.split(":")[1],
        ...t
      };
    };
    e.config(n(t.url)), i.decorate("cloudinary", e);
  },
  {
    fastify: "4.x",
    name: "fastify-cloudinary"
  }
);
export {
  f as default
};
