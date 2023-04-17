export default async function fetchProfilePic(supabase) {
    try {
      const { data, error } = await supabase.storage.from("profilePic").list('public',{
          limit: 5,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' },
        });
  
      if (error) {
        return error;
      } else {
        return data;
      }
    } catch (error) {
      return error;
    }
  }