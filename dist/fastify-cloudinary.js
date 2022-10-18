import { urlToHttpOptions as p } from "url";
import u from "fastify-plugin";
import { v2 as i } from "cloudinary";
const f = u(
  async (e, t) => {
    const n = (s = "") => {
      var o, a;
      const r = p(new URL(s));
      return {
        cloud_name: r.host || void 0,
        api_key: (o = r.auth) == null ? void 0 : o.split(":")[0],
        api_secret: (a = r.auth) == null ? void 0 : a.split(":")[1],
        ...t
      };
    };
    i.config(n(t.url)), e.decorate("cloudinary", i);
  },
  {
    fastify: "4.x",
    name: "fastify-cloudinary"
  }
);
export {
  f as default
};
