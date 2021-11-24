<map version="freeplane 1.7.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="Server" FOLDED="false" ID="ID_549888357" CREATED="1637747363871" MODIFIED="1637747374153" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle" zoom="1.1">
    <properties edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff" fit_to_viewport="false"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24.0 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" ICON_SIZE="12.0 pt" COLOR="#000000" STYLE="fork">
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10.0 pt" SHAPE_VERTICAL_MARGIN="10.0 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11"/>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="3" RULE="ON_BRANCH_CREATION"/>
<node TEXT="Freeplane" POSITION="right" ID="ID_75900546" CREATED="1637747379307" MODIFIED="1637747383423">
<edge COLOR="#ff0000"/>
<node TEXT="$&gt; sudo apt install freeplane" ID="ID_723764987" CREATED="1637747384634" MODIFIED="1637747397227"/>
</node>
<node TEXT="What is a Server?" POSITION="right" ID="ID_489209485" CREATED="1637748081097" MODIFIED="1637748087621">
<edge COLOR="#00ff00"/>
<node TEXT="Information" ID="ID_1964199129" CREATED="1637748124875" MODIFIED="1637748128188">
<node TEXT="CRUD" ID="ID_503709486" CREATED="1637755364610" MODIFIED="1637755367465">
<node TEXT="Created/Save" ID="ID_1119075131" CREATED="1637748137391" MODIFIED="1637755357804"/>
<node TEXT="Read" ID="ID_1829782549" CREATED="1637748140824" MODIFIED="1637748143048"/>
<node TEXT="Updated/Changed" ID="ID_741169954" CREATED="1637755326075" MODIFIED="1637755334493"/>
<node TEXT="Deleted" ID="ID_723975791" CREATED="1637755334947" MODIFIED="1637755337869"/>
</node>
<node TEXT="Processed by Server and then sent to Client" ID="ID_255873218" CREATED="1637748220998" MODIFIED="1637748241389"/>
</node>
<node TEXT="Client" ID="ID_1996639021" CREATED="1637748188823" MODIFIED="1637748249738"/>
<node TEXT="Backend" ID="ID_1132603958" CREATED="1637748178607" MODIFIED="1637748180835"/>
<node TEXT="HTTP" ID="ID_664054110" CREATED="1637748278909" MODIFIED="1637748483566" LINK="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol">
<node TEXT="HyperText Transport Protocol" ID="ID_1468379677" CREATED="1637748287922" MODIFIED="1637748331557"/>
<node TEXT="Client" ID="ID_1027004407" CREATED="1637755412969" MODIFIED="1637755415572">
<node TEXT="Browser" ID="ID_1056484190" CREATED="1637755419072" MODIFIED="1637755422659"/>
</node>
<node TEXT="Server" ID="ID_367853120" CREATED="1637755448226" MODIFIED="1637755450700">
<node TEXT="Apache" ID="ID_1169773548" CREATED="1637755453448" MODIFIED="1637755458794"/>
<node TEXT="nginx" ID="ID_1117498840" CREATED="1637755459795" MODIFIED="1637755464013"/>
<node TEXT="javascript http-server" ID="ID_750325135" CREATED="1637755465215" MODIFIED="1637755481261">
<font BOLD="true"/>
<node TEXT="node_module &quot;http&quot;" ID="ID_1369945625" CREATED="1637765924092" MODIFIED="1637765931204">
<node TEXT="create a server" ID="ID_1372341198" CREATED="1637765938874" MODIFIED="1637765943836"/>
<node TEXT="then let the server listen to a port (server.listen(8080);)" ID="ID_957643177" CREATED="1637765944602" MODIFIED="1637765966934"/>
<node TEXT="specify a request-handler by defining a callback function&#xa;function requestHandler(req, res) {&#xa;   res.write(&apos;hello&apos;);&#xa;   res.end(); // must be called&#xa;}" ID="ID_1938393343" CREATED="1637765967841" MODIFIED="1637766067060"/>
</node>
</node>
</node>
<node TEXT="Client -&gt; Server" ID="ID_54779207" CREATED="1637748313707" MODIFIED="1637748327914"/>
<node TEXT="Client does a Request" ID="ID_917384527" CREATED="1637748342043" MODIFIED="1637748365974">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_902962449" STARTINCLINATION="40;0;" ENDINCLINATION="40;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
<node TEXT="Server sends a Response" ID="ID_902962449" CREATED="1637748350858" MODIFIED="1637748357452"/>
<node TEXT="Resources" ID="ID_1434254925" CREATED="1637748492568" MODIFIED="1637748503186"/>
<node TEXT="URL" ID="ID_381900786" CREATED="1637748631503" MODIFIED="1637748666102" LINK="https://en.wikipedia.org/wiki/URL">
<node TEXT="Uniform Resource Locator" ID="ID_1021742103" CREATED="1637748635134" MODIFIED="1637748642052"/>
<node TEXT="http default port 80" ID="ID_1819470521" CREATED="1637749072527" MODIFIED="1637749077721"/>
<node TEXT="https default port 443" FOLDED="true" ID="ID_1115315870" CREATED="1637749079020" MODIFIED="1637749084076">
<node TEXT="http secured" ID="ID_991356484" CREATED="1637749114556" MODIFIED="1637749127515"/>
<node TEXT="encrypted" ID="ID_435506579" CREATED="1637749109889" MODIFIED="1637749113395">
<node TEXT="encryption keys" ID="ID_386922415" CREATED="1637749152087" MODIFIED="1637749165938"/>
<node TEXT="key pair" ID="ID_1771079660" CREATED="1637749166504" MODIFIED="1637749428030">
<node TEXT="private key" ID="ID_534737221" CREATED="1637749176297" MODIFIED="1637749431529">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_1094988739" MIDDLE_LABEL="signed by private key" STARTINCLINATION="166;-23;" ENDINCLINATION="166;-23;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
<node TEXT="public key" ID="ID_1724744109" CREATED="1637749179409" MODIFIED="1637749425898" HGAP_QUANTITY="12.500000044703482 pt" VSHIFT_QUANTITY="26.99999919533732 pt">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_1094988739" MIDDLE_LABEL="determine if the signature belongs to the &quot;paired&quot; private key" STARTINCLINATION="179;0;" ENDINCLINATION="62;-11;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
<node TEXT="a message signed with a signature" ID="ID_1094988739" CREATED="1637749327916" MODIFIED="1637749428030" HGAP_QUANTITY="11.000000089406964 pt" VSHIFT_QUANTITY="62.24999814480549 pt"/>
<node TEXT="encryption by public key and decryption only by private key" ID="ID_1512920998" CREATED="1637749477041" MODIFIED="1637749492261"/>
</node>
</node>
</node>
<node TEXT="http://www.example.com:80/index.html?p1=A&amp;p2=B#ressource&#xa;http://www.example.com/index.html?p1=A&amp;p2=B#ressource" ID="ID_1864074731" CREATED="1637748976100" MODIFIED="1637749012422"/>
<node TEXT="https://www.example.com:443/index.html?p1=A&amp;p2=B#ressource&#xa;https://www.example.com/index.html?p1=A&amp;p2=B#ressource" ID="ID_798090010" CREATED="1637749030701" MODIFIED="1637749064171"/>
<node TEXT="http://localhost:8080" ID="ID_1799116746" CREATED="1637765896419" MODIFIED="1637765908615"/>
</node>
</node>
</node>
</node>
</map>
