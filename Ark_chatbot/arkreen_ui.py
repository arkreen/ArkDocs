import streamlit as st
import time
import os
import sys
from datetime import datetime

# Add current directory to Python path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# Arkreen Colors
ARKREEN_COLORS = {
    "background": "#FFFFFF",
    "primary": "#000000", 
    "secondary": "#10B981",
    "accent": "#3B82F6",
    "light_green": "#D1FAE5",
    "dark_green": "#059669",
    "header": "#1F2937"
}

# Page Setup
st.set_page_config(
    page_title="Arkreen Documentation Assistant",
    page_icon="🌱",
    layout="wide"
)

# Custom CSS
st.markdown(f"""
<style>
.stApp {{
    background-color: {ARKREEN_COLORS['background']};
    font-family: 'Inter', -apple-system, sans-serif;
}}

[data-testid="stChatMessage"] {{
    padding: 1.2rem;
    border-radius: 1.2rem;
    margin: 0.8rem 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    line-height: 1.6;
}}

[data-testid="stChatMessage"][data-message-author="user"] {{
    background: linear-gradient(135deg, {ARKREEN_COLORS['dark_green']}, {ARKREEN_COLORS['secondary']});
    color: white;
    margin-left: auto;
    max-width: 78%;
    border-bottom-right-radius: 0.3rem;
}}

[data-testid="stChatMessage"][data-message-author="assistant"] {{
    background-color: {ARKREEN_COLORS['light_green']};
    color: {ARKREEN_COLORS['primary']};
    margin-right: auto;
    max-width: 78%;
    border-bottom-left-radius: 0.3rem;
    border: 1px solid rgba(16, 185, 129, 0.2);
}}

.stButton>button {{
    background: linear-gradient(135deg, {ARKREEN_COLORS['secondary']}, {ARKREEN_COLORS['accent']});
    color: white;
    border: none;
    border-radius: 0.75rem;
    padding: 0.6rem 1.8rem;
    font-weight: 600;
    transition: all 0.3s;
}}

.stButton>button:hover {{
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}}

.stChatInputContainer {{
    margin-top: 2rem;
}}

/* Typing cursor animation */
.typing-cursor {{
    display: inline-block;
    width: 2px;
    height: 1.2em;
    background-color: {ARKREEN_COLORS['secondary']};
    margin-left: 2px;
    animation: blink 1s infinite;
    vertical-align: middle;
}}

@keyframes blink {{
    0%, 50% {{ opacity: 1; }}
    51%, 100% {{ opacity: 0; }}
}}
</style>
""", unsafe_allow_html=True)

# Header Section with Arkreen branding
st.markdown(f"""
<div style="background: linear-gradient(135deg, {ARKREEN_COLORS['secondary']}, {ARKREEN_COLORS['accent']});
            color: white; padding: 2.5rem; border-radius: 1.5rem; margin-bottom: 2.5rem;
            box-shadow: 0 8px 32px rgba(16, 185, 129, 0.15); text-align: center;">
    <h1 style="color: white; font-size: 2.8rem; margin-bottom: 0.5rem;">🌿 Arkreen Documentation Assistant</h1>
    <p style="color: rgba(255,255,255,0.9); font-size: 1.2rem; max-width: 800px; margin: 0 auto;">
        AI-powered expert on Arkreen's DePIN, Carbon Offset, $AKRE token, and renewable energy solutions
    </p>
</div>
""", unsafe_allow_html=True)

# Sidebar with file check and stats
with st.sidebar:
    st.markdown("### 📁 System Status")
    
    # File existence check
    files_exist = {
        "arkreen_chatbot.py": os.path.exists("arkreen_chatbot.py"),
        "arkreen_docs.json": os.path.exists("arkreen_docs.json"),
        "faiss_index/": os.path.exists("faiss_index")
    }
    
    for file, exists in files_exist.items():
        if exists:
            st.success(f" {file}")
        else:
            st.error(f" {file}")
    
    st.markdown("---")
    
    # Quick stats
    st.markdown("### 📊 Quick Stats")
    st.markdown("""
    **Arkreen Network:**
    - 180K+ Miners
    - 7.6K+ MWh Green Energy
    - 5.4K+ ton CO₂ Impact
    - 100+ GWh Carbon Offset
    """)
    
    st.markdown("---")
    
    # Controls
    st.markdown("### ⚙️ Controls")
    
    if st.button("🗑️ Clear Chat History", use_container_width=True):
        st.session_state.messages = []
        st.rerun()
    
    if st.button("🔄 Debug Import", use_container_width=True):
        try:
            import arkreen_chatbot
            st.success(" RAG System Imported!")
            st.info(f"Module loaded from: {arkreen_chatbot.__file__}")
        except Exception as e:
            st.error(f"❌ Import Failed: {str(e)}")
    
    # Status
    st.markdown("---")
    st.markdown(f"**🕐 {datetime.now().strftime('%I:%M %p')}**")
    st.caption("Arkreen Assistant v1.0")

# Initialize chat history
if "messages" not in st.session_state:
    st.session_state.messages = [
        {"role": "assistant", "content": "👋 **Hello! I'm your Arkreen documentation assistant.**\n\nI can help you with:\n\n• **DePIN Model** - Arkreen's decentralized energy network\n• **Carbon Offset** - $AKRE token mechanisms\n• **AREC Port** - Integration and APIs\n• **Green Energy** - Impact metrics and tracking\n\nAsk me anything about Arkreen's documentation!"}
    ]

# Display existing messages
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# Chat input and processing
if prompt := st.chat_input("Ask about Arkreen's documentation..."):
    # Add user message to history
    st.session_state.messages.append({"role": "user", "content": prompt})
    
    # Display user message
    with st.chat_message("user"):
        st.markdown(prompt)
    
    # Process with RAG and display assistant response
    with st.chat_message("assistant"):
        message_placeholder = st.empty()
        message_placeholder.markdown("<div class='typing-cursor'></div>", unsafe_allow_html=True)
        
        try:
            # Import and initialize RAG system
            import arkreen_chatbot
            
            # Initialize RAG if not already done
            if "rag_system" not in st.session_state:
                with st.spinner("🚀 **Initializing Arkreen AI Engine...**"):
                    st.session_state.rag_system = arkreen_chatbot.ArkreenRAG()
            
            # Get ACTUAL RESPONSE from RAG system
            with st.spinner("🔍 **Searching Arkreen documentation...**"):
                actual_response = st.session_state.rag_system.ask(prompt)
            
            # Display "Typing..." indicator
            message_placeholder.markdown("✍️ **Arkreen Assistant is typing...**")
            time.sleep(0.3)
            
            # TYPE THE ACTUAL RESPONSE CHARACTER-BY-CHARACTER
            display_text = ""
            message_placeholder.markdown(display_text + "<div class='typing-cursor'></div>", unsafe_allow_html=True)
            
            # Smart typing with variable speeds
            for i, char in enumerate(actual_response):
                display_text += char
                
                # Adjust typing speed based on character type
                if char in ".!?\n":
                    # Longer pause at sentence ends and new lines
                    time.sleep(0.1)
                elif char in ",;:":
                    # Medium pause at commas
                    time.sleep(0.05)
                elif char == " ":
                    # Tiny pause at spaces
                    time.sleep(0.02)
                elif char in "*#-_•":
                    # Special formatting characters
                    time.sleep(0.03)
                elif i > 0 and actual_response[i-1] in ".!?":
                    # Slight pause after sentences
                    time.sleep(0.04)
                else:
                    # Normal typing speed
                    time.sleep(0.015)
                
                # Update display with blinking cursor
                message_placeholder.markdown(display_text + "<div class='typing-cursor'></div>", unsafe_allow_html=True)
            
            # Remove cursor after typing complete
            message_placeholder.markdown(display_text)
            
            # Add to chat history
            st.session_state.messages.append({"role": "assistant", "content": actual_response})
            
        except ImportError as e:
            error_msg = f"❌ **Import Error:** Could not load RAG system\n\n```{str(e)}```"
            display_text = ""
            for char in error_msg:
                display_text += char
                time.sleep(0.02)
                message_placeholder.markdown(display_text + "<div class='typing-cursor'></div>", unsafe_allow_html=True)
            message_placeholder.markdown(display_text)
            st.session_state.messages.append({"role": "assistant", "content": error_msg})
            
        except Exception as e:
            error_msg = f"⚠️ **Error Processing Request:** {str(e)}"
            display_text = ""
            for char in error_msg:
                display_text += char
                time.sleep(0.02)
                message_placeholder.markdown(display_text + "<div class='typing-cursor'></div>", unsafe_allow_html=True)
            message_placeholder.markdown(display_text)
            st.session_state.messages.append({"role": "assistant", "content": error_msg})

# Footer with additional info
st.markdown("---")
col1, col2, col3 = st.columns(3)
with col1:
    st.markdown("**🌐 Powered By**")
    st.caption("Streamlit • LangChain • FAISS")
with col2:
    st.markdown("**🤖 AI Model**")
    st.caption("Groq Qwen-3-32B")
with col3:
    st.markdown("**📈 Data Source**")
    st.caption(f"Arkreen Docs • Updated: {datetime.now().strftime('%b %d')}")

# Add info expander
