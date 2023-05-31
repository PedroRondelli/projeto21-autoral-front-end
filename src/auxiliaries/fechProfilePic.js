export default async function fetchProfilePic(supabase,user) {
    try {
      const { data, error } = await supabase.storage.from("profilePic").list('public',{
          limit: 5,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' },
          search:user.id
        });
  
      if (error) {
        return error;
      } else {
        console.log("vasco",data)
        return data;
      }
    } catch (error) {
      return error;
    }
  }
  