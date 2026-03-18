import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qcnidbqwfmpkgozvsxaf.supabase.co';
const supabaseKey = 'sb_publishable_6jkRVBsGi19rjETAWjlbag_-ptksVOa';

export const supabase = createClient(supabaseUrl, supabaseKey);
