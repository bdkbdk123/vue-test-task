import { $api } from "@/service/api";

export default function (store) {
  try {
    store.$api = $api;
  } catch (e) {
    console.error(e);
  }
}
