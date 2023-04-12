export default async function fetchArts(supabase) {
  try {
    const { data, error } = await supabase.storage.from("photos").list('public',{
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      });

    if (error) {
        console.log("deu erro")
      return error;
    } else {
      console.log("vasco");
      return data;
    }
  } catch (error) {
    return error;
  }
}
