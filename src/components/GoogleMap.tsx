
const GoogleMap = () => {
  return (
    <div className="w-full h-[400px] rounded-md overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32094.38316541261!2d30.569522924620797!3d59.740865950656485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469636fa9269cfff%3A0xd832e0049cf9e9ab!2z0JrQvtC70L_QuNC90L4sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTY2NTM!5e0!3m2!1sru!2sru!4v1718203151774!5m2!1sru!2sru" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
