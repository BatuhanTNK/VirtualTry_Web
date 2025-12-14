import { createClient } from '@supabase/supabase-js';

// .env dosyasından değişkenleri alıyoruz
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Eğer değişkenler yoksa hata fırlat ki anlayalım
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL veya Anon Key bulunamadı! .env dosyasını kontrol edin.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);