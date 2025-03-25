# AI-Enhanced Interactive Art Gallery | Yapay Zeka Destekli İnteraktif Sanat Galerisi

*[English](#english) | [Türkçe](#türkçe)*

---

<a name="english"></a>
## AI-Enhanced Interactive Art Gallery

An innovative digital art gallery that brings artworks to life using AI technology, enabling visitors to have conversational interactions with the exhibits.

### 🎨 Features

- **Multilingual Support**: Full English and Turkish language interface
- **Semantic Search**: Find artworks using natural language queries (e.g., "melancholic artworks" or "blue seascapes")
- **Color-Based Exploration**: Filter artworks by their dominant colors
- **Interactive Conversations**: Chat directly with the artworks through AI-powered personification
- **Adaptive Questions**: Each artwork generates context-aware questions based on its unique characteristics
- **Smart Recommendations**: Discover related artworks through AI-driven recommendations
- **Voice Search**: Search the gallery using voice commands
- **Responsive Design**: Optimized for all devices

### 🔧 Technical Details

This project leverages several advanced technologies:

- **Frontend**: Next.js, React, TailwindCSS, Framer Motion
- **AI Integration**: OpenAI API (GPT-4 and GPT-3.5 models)
- **Internationalization**: next-i18next for multilingual support
- **State Management**: React Hooks and Context API
- **API**: RESTful endpoints with OpenAI integration

### 🚀 Getting Started

1. Clone the repository
   ```
   git clone https://github.com/yourusername/ai-art-gallery.git
   cd ai-art-gallery
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create `.env.local` file and add your OpenAI API key
   ```
   OPENAI_API_KEY=your_key_here
   ```

4. Start the development server
   ```
   npm run dev
   ```

5. Access the gallery at [http://localhost:3000](http://localhost:3000)

### 📋 Image Configuration

Images should be placed in a web-accessible directory with a naming convention of 1.jpg, 2.jpg, etc., corresponding to the artwork IDs in the `artworks.json` file.

The default image URL format is:
```
https://yourserver.com/path/to/images/{filename}
```

You can modify this path in:
- `src/pages/index.js`
- `src/pages/api/recommend.js`
- `src/pages/artwork/[id]/index.js`

### 🌐 Deployment

To deploy the application:

1. Build the project
   ```
   npm run build
   ```

2. Deploy the generated `.next` folder to your hosting provider.

### 🧠 How the AI Works

1. **Artwork Personification**: Each artwork is given a unique AI personality based on its metadata (description, style, colors, etc.)
2. **Natural Language Processing**: The system analyzes user queries to find relevant artworks based on semantic understanding
3. **Contextual Awareness**: AI-generated questions adapt based on the artwork's characteristics and conversation history
4. **Dynamic Translation**: All content is automatically translated between languages using AI while preserving the nuanced meaning

---

<a name="türkçe"></a>
## Yapay Zeka Destekli İnteraktif Sanat Galerisi

Yapay zeka teknolojisiyle sanat eserlerini canlandıran, ziyaretçilerin eserlerle sohbet edebilmesini sağlayan yenilikçi bir dijital sanat galerisi.

### 🎨 Özellikler

- **Çoklu Dil Desteği**: Tam Türkçe ve İngilizce arayüz
- **Anlamsal Arama**: Doğal dil sorguları kullanarak eserleri bulma (örn. "hüzünlü eserler" veya "mavi deniz manzaraları")
- **Renk Bazlı Keşif**: Eserleri baskın renklerine göre filtreleme
- **İnteraktif Sohbetler**: Yapay zeka destekli kişileştirme ile eserlerle doğrudan sohbet etme
- **Adaptif Sorular**: Her eser, kendine özgü özelliklerine dayalı bağlama duyarlı sorular oluşturur
- **Akıllı Öneriler**: Yapay zeka destekli öneriler ile ilgili eserleri keşfetme
- **Sesli Arama**: Ses komutları kullanarak galeriyi arama
- **Duyarlı Tasarım**: Tüm cihazlar için optimize edilmiş

### 🔧 Teknik Detaylar

Bu proje çeşitli gelişmiş teknolojileri kullanmaktadır:

- **Ön Yüz**: Next.js, React, TailwindCSS, Framer Motion
- **Yapay Zeka Entegrasyonu**: OpenAI API (GPT-4 ve GPT-3.5 modelleri)
- **Uluslararasılaştırma**: Çok dilli destek için next-i18next
- **Durum Yönetimi**: React Hooks ve Context API
- **API**: OpenAI entegrasyonu ile RESTful endpoints

### 🚀 Başlangıç

1. Depoyu klonlayın
   ```
   git clone https://github.com/kullaniciadi/ai-art-gallery.git
   cd ai-art-gallery
   ```

2. Bağımlılıkları yükleyin
   ```
   npm install
   ```

3. `.env.local` dosyası oluşturun ve OpenAI API anahtarınızı ekleyin
   ```
   OPENAI_API_KEY=anahtariniz_buraya
   ```

4. Geliştirme sunucusunu başlatın
   ```
   npm run dev
   ```

5. Galeriye [http://localhost:3000](http://localhost:3000) adresinden erişin

### 📋 Resim Yapılandırması

Resimler, web erişimine açık bir dizinde 1.jpg, 2.jpg vb. şeklinde, `artworks.json` dosyasındaki eser ID'lerine karşılık gelen bir adlandırma kuralıyla yerleştirilmelidir.

Varsayılan resim URL formatı:
```
https://sunucunuz.com/resimlerin/yolu/{dosya_adi}
```

Bu yolu şu dosyalarda değiştirebilirsiniz:
- `src/pages/index.js`
- `src/pages/api/recommend.js`
- `src/pages/artwork/[id]/index.js`

### 🌐 Dağıtım

Uygulamayı dağıtmak için:

1. Projeyi derleyin
   ```
   npm run build
   ```

2. Oluşturulan `.next` klasörünü hosting sağlayıcınıza yükleyin.

### 🧠 Yapay Zeka Nasıl Çalışıyor

1. **Eser Kişileştirme**: Her esere, metaverilerine (açıklama, stil, renkler vb.) dayalı benzersiz bir yapay zeka kişiliği verilir
2. **Doğal Dil İşleme**: Sistem, anlamsal anlayışa dayalı ilgili eserleri bulmak için kullanıcı sorgularını analiz eder
3. **Bağlamsal Farkındalık**: Yapay zeka tarafından oluşturulan sorular, eserin özellikleri ve konuşma geçmişine göre uyarlanır
4. **Dinamik Çeviri**: Tüm içerik, nüanslı anlamı koruyarak yapay zeka kullanılarak diller arasında otomatik olarak çevrilir

---

*© 2023 Created by Müge Akbulut*