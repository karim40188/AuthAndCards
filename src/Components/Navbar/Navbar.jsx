import { Box } from "@mui/material";
import searchIcon from "../../assets/vectors/search.png";

function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "#124989", // الأزرق الداكن
        height: { xs: "auto", sm: "126px" }, // تعديل الارتفاع بناءً على حجم الشاشة
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "10px", sm: "0" }, // إضافة تباعد في الشاشات الصغيرة
      }}
    >
      <Box
        component="form"
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: { xs: "100%", sm: "80%" },
          }}
        >
          <input
            type="search"
            placeholder="Search for products"
            style={{
              width: "100%", // استخدام العرض الكامل للشاشة الصغيرة
              maxWidth: "900px", // الحد الأقصى للعرض في الشاشات الكبيرة
              height: "70px", // زيادة ارتفاع الـ input
              borderRadius: "10px",
              paddingInline: "40px", // زيادة الحشو الداخلي لتكبير المساحة
              color: "#BDB8B8",
              fontSize: "18px", // تكبير حجم الخط قليلاً ليكون أوضح
              fontFamily: "Amiko",
              fontWeight: "700",
              boxSizing: "border-box", // تأكيد حساب العرض بشكل صحيح مع الحشو
            }}
          />
          <Box
            sx={{
              width: { xs: "40px", sm: "52px" }, // تغيير حجم الأيقونة بناءً على حجم الشاشة
              height: { xs: "30px", sm: "41px" },
              position: "absolute",
              top: "50%",
              right: "15px", // تغيير المسافة من اليمين لضبط مكان الأيقونة
              transform: "translateY(-50%)", // محاذاة الأيقونة عمودياً في المنتصف
            }}
            component="img"
            src={searchIcon}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
