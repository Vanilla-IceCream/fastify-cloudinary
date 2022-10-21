import { urlToHttpOptions as u } from "url";
import l from "fastify-plugin";
import { v2 as i } from "cloudinary";
const d = l(
  async (n, t) => {
    const e = (s = "") => {
      var a, o;
      const r = u(new URL(s));
      return {
        cloud_name: r.hostname || void 0,
        api_key: (a = r.auth) == null ? void 0 : a.split(":")[0],
        api_secret: (o = r.auth) == null ? void 0 : o.split(":")[1],
        ...t
      };
    };
    i.config(e(t.url)), n.decorate("cloudinary", i);
  },
  {
    fastify: "4.x",
    name: "fastify-cloudinary"
  }
);
export {
  d as default
};
