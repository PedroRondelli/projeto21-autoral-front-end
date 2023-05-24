export default async function fetchArts(supabase, user) {
  const folder= `public/${user.id}`
  try {
    const { data, error } = await supabase.storage
      .from("photos")
      .list(folder , {
        limit: 5,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });
    if (error) {
      console.log(error);
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
