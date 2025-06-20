Jawaban Bagian B Praktik Manual Testing

# Test Cases - Login Website Saucedemo
https://www.saucedemo.com/

| TC ID | Deskripsi                                 | Langkah                                                                 | Input                              | Expected Result                                          | Jenis Test       |
|-------|--------------------------------------------|------------------------------------------------------------------------|------------------------------------|----------------------------------------------------------|------------------|
| TC01  | Login dengan user standard valid          | Buka halaman login, masukkan username dan password, klik login         | Username: standard_user<br>Password: secret_sauce | Berhasil login dan diarahkan ke halaman produk           | Positive         |
| TC02  | Login dengan user problem valid           | Buka halaman login, masukkan username dan password, klik login         | Username: problem_user<br>Password: secret_sauce  | Berhasil login dan diarahkan ke halaman produk (meskipun ada glitch) | Positive         |
| TC03  | Login dengan user performance_glitch_user | Buka halaman login, masukkan username dan password, klik login         | Username: performance_glitch_user<br>Password: secret_sauce | Berhasil login walau mungkin ada delay                   | Positive         |
| TC04  | Login dengan user visual_user             | Buka halaman login, masukkan username dan password, klik login         | Username: visual_user<br>Password: secret_sauce   | Berhasil login dengan tampilan visual tertentu           | Positive         |
| TC05  | Login dengan user problem_user            | Buka halaman login, masukkan username dan password, klik login         | Username: problem_user<br>Password: secret_sauce  | Berhasil login, walau kemungkinan ada bug                | Positive         |
| TC06  | Login dengan username salah               | Buka halaman login, masukkan username salah dan password benar         | Username: wrong_user<br>Password: secret_sauce    | Gagal login, muncul pesan error "Username and password do not match" | Negative         |
| TC07  | Login dengan password salah               | Buka halaman login, masukkan username benar dan password salah         | Username: standard_user<br>Password: wrong_pass   | Gagal login, muncul pesan error "Username and password do not match" | Negative         |
| TC08  | Login dengan akun locked_out_user         | Buka halaman login, masukkan locked_out_user dan password              | Username: locked_out_user<br>Password: secret_sauce | Gagal login, muncul pesan "Sorry, this user has been locked out." | Negative         |
| TC09  | Password terlalu pendek (1 karakter)      | Masukkan username dan password hanya 1 karakter                        | Username: standard_user<br>Password: a            | Gagal login, validasi panjang minimal password tidak terpenuhi | Boundary         |
| TC10  | Password panjang maksimal (misal 64 karakter) | Masukkan username valid dan password dengan panjang 64 karakter     | Username: standard_user<br>Password: a...a (64x)  | Berhasil login jika password benar, gagal jika tidak     | Boundary         |
